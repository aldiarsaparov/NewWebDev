from django.shortcuts import render
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Create your views here.

class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'id'

class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailAPIView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'id'

class VacancyTopTenAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer

class CompanyVacanciesListAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'id'

    def get_queryset(self):
        company_id = self.kwargs.get(self.lookup_url_kwarg)
        return Vacancy.objects.filter(company_id=company_id)