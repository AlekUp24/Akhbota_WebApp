from django.shortcuts import render

# Create your views here.

def kennel(request):
    return render(request, 'kennel.html', {})