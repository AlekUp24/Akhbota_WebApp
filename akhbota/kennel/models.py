from django.db import models

# Create your models here.

class Dog_Breed(models.Model):
    breed = models.CharField(max_length=50, blank=False)
    description = models.CharField(max_length=10000, blank=True)

    class Meta:
        verbose_name = "Rasy"
        verbose_name_plural = "Rasy"
    
    def __str__(self):
        return f"{self.breed}"

class Dog(models.Model):

    CATEGORY_CHOICES = [
    ('Pies', 'Pies'),
    ('Suka', 'Suka'),
    ]

    name = models.CharField(max_length=100, blank=False)
    description = models.CharField(max_length=10000, blank=True)
    breed = models.ForeignKey(Dog_Breed, on_delete=models.CASCADE, blank=False)
    sex =  models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='Pies')
    birth_date = models.DateField()
    awards = models.CharField(max_length=10000, blank=True)
    medical = models.CharField(max_length=10000, blank=True)
    image1 = models.ImageField(upload_to='uploads/dogs/', blank=True)
    image2 = models.ImageField(upload_to='uploads/dogs/', blank=True)

    class Meta:
        verbose_name = "Psy"
        verbose_name_plural = "Psy"
    
    def __str__(self):
        return f"{self.name} - {self.breed} - {self.birth_date}"

class Puppies(models.Model):
    name = models.CharField(max_length=200, blank=False)
    description = models.CharField(max_length=10000, blank=True)
    image1 = models.ImageField(upload_to='uploads/puppies/', blank=True)

    class Meta:
        verbose_name = "Szczenięta"
        verbose_name_plural = "Szczenięta"

    def __str__(self):
        return f"{self.name}"
