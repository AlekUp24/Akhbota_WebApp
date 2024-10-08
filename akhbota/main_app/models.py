from django.db import models

# Create your models here.

class Carousel_Items(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='uploads/carousel/', blank=True)

    class Meta:
        verbose_name = "Elementy Karuzeli"
        verbose_name_plural = "Elementy Karuzeli"
    
    def __str__(self):
        return f"{self.title}"
    
class Gellery_Items(models.Model):
    CATEGORY_CHOICES = [
    ('wystawy', 'Wystawy'),
    ('codzienne', 'Życie Codzienne'),
    ('szczenieta', 'Szczenięta'),
    ]
    
    title = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='uploads/gallery/', blank=True)
    add_date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='wystawy')

    class Meta:
        verbose_name = "Galeria Zdjęć"
        verbose_name_plural = "Galeria Zdjęć"

    def __str__(self):
        return f"{self.title} - Kategoria: {self.category} - Dodano: {self.add_date}"
    

