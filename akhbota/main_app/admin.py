from django.contrib import admin
from django import forms
from .models import Carousel_Items, Gellery_Items, Puppies
# Register your models here.

admin.site.register(Carousel_Items)
admin.site.register(Gellery_Items)


class PuppiesForm(forms.ModelForm):
    class Meta:
        model = Puppies
        fields = '__all__'
        widgets = {
            'description_PL': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
            'description_EN': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
        }

# Register the form with the model admin
@admin.register(Puppies)
class DogBreedAdmin(admin.ModelAdmin):
    form = PuppiesForm