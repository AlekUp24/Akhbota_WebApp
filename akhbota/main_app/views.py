from django.shortcuts import render

# Create your views here.


def base(request):
    return render(request, 'base.html', {})


def home(request):
    return render(request, 'home.html', {})