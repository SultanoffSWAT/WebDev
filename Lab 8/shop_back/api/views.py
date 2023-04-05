from django.shortcuts import render
import json
from api.models import Product, Category
from django.http import JsonResponse
# Create your views here.


def get_product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def get_product(request, id):
    products = Product.objects.get(id=id)
    return JsonResponse(products.to_json())


def get_category_list(request):
    category = Category.objects.all()
    category_json = [c.to_json() for c in category]
    return JsonResponse(category_json, safe=False)


def get_category(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category.to_json())


def get_product_category(request, id):
    products = Product.objects.filter(category_id=id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
