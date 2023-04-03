from django.contrib import admin
from django.urls import path
from api.views import get_products, get_product, get_category, get_categories, get_category_products

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', get_products),
    path('products/<int:pk>/', get_product),
    path('categories/', get_categories),
    path('categories/<int:pk>/', get_category),
    path('categories/<int:id>/products/', get_category_products)
]