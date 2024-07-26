from django.shortcuts import render
from .models import Carousel_Items
# Create your views here.


def base(request):
    return render(request, 'base.html', {})


def home(request):

    carousel_items = Carousel_Items.objects.all()

    return render(request, 'home.html', {'carousel_items':carousel_items})