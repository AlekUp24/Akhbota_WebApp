from django import forms
from django.contrib import admin
from .models import Dog, Dog_Breed

# Register your models here.

# Create a custom form
class DogForm(forms.ModelForm):
    class Meta:
        model = Dog
        fields = '__all__'
        widgets = {
            'description_PL': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
            'description_EN': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
            'awards_PL': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
            'awards_EN': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
            'medical': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
        }

# Register the form with the model admin
@admin.register(Dog)
class DogAdmin(admin.ModelAdmin):
    form = DogForm


# Create a custom form
class DogBreedForm(forms.ModelForm):
    class Meta:
        model = Dog_Breed
        fields = '__all__'
        widgets = {
            'description': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
        }

# Register the form with the model admin
@admin.register(Dog_Breed)
class DogBreedAdmin(admin.ModelAdmin):
    form = DogBreedForm

