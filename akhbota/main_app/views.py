from django.shortcuts import render
from .models import Carousel_Items, Gellery_Items, Puppies
from kennel.models import Dog_Breed
from django.http import JsonResponse
# Create your views here.


def home(request):
    breeds = Dog_Breed.objects.all()
    carousel_items = Carousel_Items.objects.all()

    return render(request, 'home.html', {'carousel_items':carousel_items, 'breeds':breeds})


def gallery(request, cat):
    breeds = Dog_Breed.objects.all()

    if cat == 'all':
        gallery_items = Gellery_Items.objects.order_by('-add_date')
        choices = Gellery_Items.CATEGORY_CHOICES

        return render(request, 'gallery.html', {'gallery_items':gallery_items , 'choices':choices, 'curr_choice':'all', 'breeds':breeds})
    else:
        gallery_items = Gellery_Items.objects.filter(category=cat).order_by('-add_date')
        choices = Gellery_Items.CATEGORY_CHOICES

        return render(request, 'gallery.html', {'gallery_items':gallery_items , 'choices':choices , 'curr_choice': cat, 'breeds':breeds})


def puppies(request):
    breeds = Dog_Breed.objects.all()
    puppies = Puppies.objects.all()

    print(len(puppies))

    return render(request, 'puppies.html' , {'puppies':puppies, 'breeds':breeds})