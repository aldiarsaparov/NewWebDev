from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    # category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    name = models.CharField(max_length=100)
    products = models.ManyToManyField(Product)

    def __str__(self):
        return self.name
    