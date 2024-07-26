from django.shortcuts import render
from .models import Carousel_Items, Gellery_Items
# Create your views here.


def home(request):

    carousel_items = Carousel_Items.objects.all()

    return render(request, 'home.html', {'carousel_items':carousel_items})

def gallery(request):

    gallery_items = Gellery_Items.objects.all()

    return render(request, 'gallery.html', {'gallery_items':gallery_items})