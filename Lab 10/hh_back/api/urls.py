from django.urls import path
from api import views


urlpatterns = [
    path('companies/', views.get_company_list),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.get_company_vacancy),
    path('vacancies/', views.get_vacancy_list),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.get_vacancy_top_ten)
]
#
# urlpatterns = [
#     path('companies/', views.GetCompanyList.as_view()),
#     path('companies/<int:id>/', views.GetCompany.as_view()),
#     path('companies/<int:id>/vacancies/', views.GetCompanyVacancy.as_view()),
#     path('vacancies/', views.GetVacancyList.as_view()),
#     path('vacancies/<int:id>/', views.GetVacancy.as_view()),
#     path('vacancies/top_ten/', views.GetVacancyTopTen.as_view())
# ]