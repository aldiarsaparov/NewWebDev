from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q
from .serializers import VacancySer, VacancyModSer
from .models import Vacancy

# Create your views here.

def vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id).to_json()
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found!"})
    
def vacancies(request):
    vacancies_obj = Vacancy.objects.all()
    vacancies = VacancySer(vacancies_obj, many=True)

    return JsonResponse(vacancies.data, safe=True)

def get_top_ten_vacancies(request):
    top_vacancies_obj = Vacancy.objects.filter(~Q(salary=None)).order_by('-salary')[:10]
    top_vacancies = VacancyModSer(top_vacancies_obj, many=True)
    
    return JsonResponse(top_vacancies.data, safe=False)

