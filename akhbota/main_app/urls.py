
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home , name='home'),
    path('gallery/<str:cat>', views.gallery , name='gallery'),    
]
