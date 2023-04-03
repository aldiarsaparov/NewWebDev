from django.contrib import admin
from django.urls import path
from api.views import getProducts

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', getProducts)
]