from django.shortcuts import render
from .models import Product, Category
from django.http.response import HttpResponse, JsonResponse
from django.core import serializers

# Create your views here.

products = [
        {
            "id" : _id,
            "name" : f"Product #{_id}"
        }

        for _id in range(1,11)
    ]

def get_products(request):
    li_product_obj = Product.objects.all()
    li_proudcts = [p.to_json() for p in li_product_obj]

    return JsonResponse(li_proudcts,safe=False)

def get_product(request, pk):
    li_product_obj = Product.objects.all()
    li_products = [p.to_json() for p in li_product_obj]

    # for product in li_products:
        # if(product.id == int(pk)):
    try:    
        return JsonResponse(li_products[int(pk) - 1])
    except:
            # Nessesary step:
        return JsonResponse({'error':'Product not found'})  
  
# def get_categories(request):
#     li_category_obj = Category.objects.all()
#     li_category = [c.to_json() for c in li_category_obj]
#     data = {"categories": li_category}
#     return JsonResponse(data, safe=False)

def get_categories(request):
    categories = Category.objects.all()
    data = serializers.serialize('json', categories, fields=('name','products'))
    return HttpResponse(data, content_type='application/json')

def get_category(request, pk):
    try:
        target_category = Category.objects.get(pk=pk)
        data = serializers.serialize('json', [target_category])
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error' : 'Category is not found'}) 
      
def get_category_products(request, id):
    try:
        # this id is from 
        #     path('categories/<int:id>/products/', views.get_category_products)
        category = Category.objects.get(id=id)
        # each category has products and it just has them all
        #  # 'products' is a QuerySet of all products associated with the 'category' instance
        products = category.products.all()
        # 'data' is a string containing the JSON serialized data of the 'products' QuerySet
        data = serializers.serialize('json',products)

        return JsonResponse(data,safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})
