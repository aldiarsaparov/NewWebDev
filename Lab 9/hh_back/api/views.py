from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from api.models import Company, Vacancy
from django.db.models import Q

# Create your views here.

def companies(request):
    companies_objs = Company.objects.all()
    companies = [company.to_json() for company in companies_objs]

    return JsonResponse(companies,safe=False)

def company(request, id):
    try:
        company_object = Company.objects.get(id=id)
        return JsonResponse(company_object.to_json())
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def get_company_vacancies(request,id):
    try:
        company = Company.objects.get(id=id)
        vacancies_obj = Vacancy.objects.filter(company=company)
        vacancies = [vacancy.to_json() for vacancy in vacancies_obj]

        return JsonResponse(vacancies,safe=False)

    except Company.DoesNotExist:
        return JsonResponse({"error":"Company not found"})
    except Vacancy.DoesNotExist:
        return JsonResponse({"error":"Vacancy not found"})
    
def vacancy(request,id):
    try:
        vacancy = Vacancy.objects.get(id=id).to_json()
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"})

def vacancies(request):
    vacancies_obj = Vacancy.objects.all()
    vacancies = [vacancy.to_json() for vacancy in vacancies_obj]

    return JsonResponse(vacancies,safe=False)

def get_top_ten_vacancies(request):
    top_vacancies_obj = Vacancy.objects.filter(~Q(salary=None)).order_by('-salary')[:10]

    top_vacancies = [vacancy.to_json() for vacancy in top_vacancies_obj]

    return JsonResponse(top_vacancies,safe=False)