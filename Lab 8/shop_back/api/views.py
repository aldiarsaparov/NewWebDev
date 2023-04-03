from django.shortcuts import render
from .models import Product, Category
from django.http.response import HttpResponse, JsonResponse

# Create your views here.

def getProducts(request):
    return HttpResponse("hello")