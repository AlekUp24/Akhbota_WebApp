
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home , name='home'),
    path('gallery/<str:cat>', views.gallery , name='gallery'),
    path('pups', views.pups , name='pups'),
    path('bolognese', views.bolognese , name='bolognese'),
    path('russian_colorful_bolognese', views.russian_colorful_bolognese , name='russian_colorful_bolognese'),
    
]
