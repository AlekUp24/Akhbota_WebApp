from django.shortcuts import render, get_object_or_404
from .models import Dog_Breed,Dog
# Create your views here.



def kennel(request,breed):
    breeds = Dog_Breed.objects.all()
    
    if breed == 'all':
        title = "Nasze Psy"
        this_description = "Wszyscy nasi podopieczni:"
        dogs = Dog.objects.all()

        return render(request, 'kennel.html', {'dogs': dogs, 'title':title, 'description':this_description, 'breeds':breeds} )
    
    else:
        this_breed = get_object_or_404(Dog_Breed,breed=breed)
        dogs = Dog.objects.filter(breed=this_breed)

        return render(request, 'kennel.html', {'dogs': dogs, 'title':this_breed.breed, 'description':this_breed.description, 'breeds':breeds} )
    

