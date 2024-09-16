
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('kennel/<str:breed>', views.kennel , name='kennel'),
    path('puppies', views.puppies , name='puppies')
]