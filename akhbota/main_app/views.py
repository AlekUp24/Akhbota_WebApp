from django.shortcuts import render
from .models import Carousel_Items, Gellery_Items
from django.http import JsonResponse
# Create your views here.


def home(request):

    carousel_items = Carousel_Items.objects.all()

    return render(request, 'home.html', {'carousel_items':carousel_items})


def gallery(request, cat):
    print(cat)
    if cat == 'all':
        gallery_items = Gellery_Items.objects.all()
        choices = Gellery_Items.CATEGORY_CHOICES

        return render(request, 'gallery.html', {'gallery_items':gallery_items , 'choices':choices, 'curr_choice':'all'})
    else:
        gallery_items = Gellery_Items.objects.filter(category=cat)
        choices = Gellery_Items.CATEGORY_CHOICES

        return render(request, 'gallery.html', {'gallery_items':gallery_items , 'choices':choices , 'curr_choice': cat})

def pups(request):

    return render(request, 'k_pups.html', {})

def bolognese(request):

    return render(request, 'k_bolognese.html', {})

def russian_colorful_bolognese(request):

    return render(request, 'k_russian_color.html', {})