from rest_framework.response import Response
from django.http import JsonResponse
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView


class GetCompanyList(APIView):
    def get(self, request):
        company = Company.objects.all()
        serializer = CompanySerializer(company, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


class GetCompany(APIView):
    def get_object(self, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = CompanySerializer(instance)
        return Response(serializer.data)

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = CompanySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return JsonResponse({'deleted': True})


class GetCompanyVacancy(APIView):
    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
            return company.company.all()
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer(instance, many=True)
        return Response(serializer.data)

    def post(self, request, id):
        instance = self.get_object(id)
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


class GetVacancyList(APIView):
    def get(self, request):
        instance = Vacancy.objects.all()
        serializer = VacancySerializer(instance, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


class GetVacancy(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=400)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer(instance)
        return Response(serializer.data)

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        instance = self.get_object(self, id)
        instance.delete()
        return Response({'deleted': True})


class GetVacancyTopTen(APIView):
    def get(self, request):
        instance = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(instance, many=True)
        return Response(serializer.data)
#
