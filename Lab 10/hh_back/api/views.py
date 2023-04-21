from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q
from .serializers import VacancySer, VacancyModSer
from .models import Vacancy
from django.http import JsonResponse
from django.views import View
from .models import Company, Vacancy
from .serializers import CompanySer, CompanyModSer
from rest_framework.views import APIView

# Create your views here.

# function based views
def vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id).to_json()
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found!"})
    
def vacancies(request):
    vacancies_obj = Vacancy.objects.all()
    vacancies = VacancySer(vacancies_obj, many=True)

    return JsonResponse(vacancies.data, safe=False)

def get_top_ten_vacancies(request):
    top_vacancies_obj = Vacancy.objects.filter(~Q(salary=None)).order_by('-salary')[:10]
    top_vacancies = VacancyModSer(top_vacancies_obj, many=True)
    
    return JsonResponse(top_vacancies.data, safe=False)


# class based views

class Companies(View):
    def get(self,request):
        companies_objs = Company.objects.all()
        serializer = CompanySer(companies_objs, many=True)

        return JsonResponse(serializer.data, safe=False)

class OneCompany(View):
    def get(self,request,pk):
        try:
            company_object = Company.objects.get(id=pk)
            return JsonResponse(CompanyModSer(company_object).data, safe=False)
        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"}, status=404)
        
class GetCompanyVacancies(View):
    def get(self,request,id):
        try:
            company = Company.objects.get(id=id)
            vacancies_obj = Vacancy.objects.filter(company=company)
            vacancies = [vacancy.to_json() for vacancy in vacancies_obj]

            return JsonResponse(vacancies, safe=False)

        except Company.DoesNotExist:
            return JsonResponse({"error": "Company not found"})
        except Vacancy.DoesNotExist:
            return JsonResponse({"error": "Vacancy not found"})