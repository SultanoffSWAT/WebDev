from django.db.models import Count
from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
# Create your views here.


# @csrf_exempt
@api_view(['GET', 'POST'])
def get_company_list(request):
    if request.method == "GET":
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "PUT":
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'deleted': True})


@api_view(['GET', 'POST'])
def get_company_vacancy(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.company.all()
    except Company.DoesNotExist:
        return JsonResponse({'message': "Company with such an id doesn't exist"}, status=404)
    if request.method == "GET":
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'POST'])
def get_vacancy_list(request):
    if request.method == "GET":
        vacancy = Vacancy.objects.all()
        serializer = VacancySerializer(vacancy, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "PUT":
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'deleted': True})


@api_view(['GET'])
def get_vacancy_top_ten(request):
    if request.method == "GET":
        vacancy = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(vacancy, many=True)
        return JsonResponse(serializer.data, safe=False)



# @csrf_exempt
# def get_company_list(request):
#     if request.method == "GET":
#         company = Company.objects.all()
#         company_json = [c.to_json() for c in company]
#         return JsonResponse(company_json, safe=False)
#     elif request.method == "POST":
#         data = json.loads(request.body)
#         company = Company.objects.create(name=data.get('name'), description=data.get('description'),
#                                          city=data.get('city'), address=data.get('address'))
#         return JsonResponse(company.to_json())

#
# @csrf_exempt
# def get_company(request, id):
#     try:
#         company = Company.objects.get(id=id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status=400)
#     if request.method == "GET":
#         return JsonResponse(company.to_json())
#     elif request.method == "PUT":
#         data = json.loads(request.body)
#         company.name = data.get('name')
#         company.description = data.get('description')
#         company.city = data.get('city')
#         company.address = data.get('address')
#         company.save()
#         return JsonResponse(company.to_json())
#     elif request.method == "DELETE":
#         company.delete()
#         return JsonResponse({'deleted': True})
#
#
# @csrf_exempt
# def get_company_vacancy(request, id):
#     try:
#         company = Company.objects.get(id=id)
#         vacancies = company.company.all()
#         vacancies_json = [vacancy.to_json() for vacancy in vacancies]
#     except Company.DoesNotExist:
#         return JsonResponse({'message': "Company with such an id doesn't exist"}, status=404)
#     if request.method == "GET":
#         return JsonResponse(vacancies_json, safe=False)
#     elif request.method == "POST":
#         data = json.loads(request.body)
#         vacancy = Vacancy.objects.create(name=data.get('name'), description=data.get('description'),
#                                          salary=data.get('salary'), company=company)
#         return JsonResponse(vacancy.to_json())
#
#
# @csrf_exempt
# def get_vacancy_list(request):
#     if request.method == "GET":
#         vacancy = Vacancy.objects.all()
#         vacancy_json = [v.to_json() for v in vacancy]
#         return JsonResponse(vacancy_json, safe=False)
#     elif request.method == "POST":
#         data = json.loads(request.body)
#         company = Company.objects.get(id=data.get('company'))
#         vacancy = Vacancy.objects.create(name=data.get('name'), description=data.get('description'),
#                                          salary=data.get('salary'), company=company)
#         return JsonResponse(vacancy.to_json())
#
#
# @csrf_exempt
# def get_vacancy(request, id):
#     try:
#         vacancy = Vacancy.objects.get(id=id)
#     except Vacancy.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status=400)
#     if request.method == "GET":
#         return JsonResponse(vacancy.to_json())
#     elif request.method == "PUT":
#         data = json.loads(request.body)
#         vacancy.name = data.get('name')
#         vacancy.description = data.get('description')
#         vacancy.salary = data.get('salary')
#         vacancy.save()
#         return JsonResponse(vacancy.to_json())
#     elif request.method == "DELETE":
#         vacancy.delete()
#         return JsonResponse({'deleted': True})
#
#
# @csrf_exempt
# def get_vacancy_top_ten(request):
#     if request.method == "GET":
#         vacancy = Vacancy.objects.order_by('-salary')[:10]
#         vacancy_json = [v.to_json() for v in vacancy]
#         return JsonResponse(vacancy_json, safe=False)
#
