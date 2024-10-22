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
    
class Puppies(models.Model):

    Period_CHOICES = [
    ('jesień', 'Jesień'),
    ('zima', 'Zima'),
    ('wiosna', 'Wiosna'),
    ('lato', 'Lato'),
    ]

    Year_CHOICES = [
    ('2024', '2024'),
    ('2025', '2025'),
    ('2026', '2026'),
    ('2027', '2027'),
    ('2028', '2028'),
    ('2029', '2029'),
    ('2030', '2030'),
    ('2031', '2031'),
    ('2032', '2032'),
    ('2033', '2033'),
    ('2034', '2034'),
    ]

    Breed_CHOICES = [
    ('Bolończyk', 'Bolończyk'),
    ('Rosyjska Bolonka Kolorowa', 'Rosyjska Bolonka Kolorowa'),
    ]
        
    period = models.CharField(max_length=20, choices=Period_CHOICES, default='jesień')
    year = models.CharField(max_length=20, choices=Year_CHOICES, default='2024')
    rasa = models.CharField(max_length=100, choices=Breed_CHOICES, default='Bolończyk')
    image = models.ImageField(upload_to='uploads/puppies/', blank=True)
    
    class Meta:
        verbose_name = "Elementy Szczeniąt"
        verbose_name_plural = "Elementy Szczeniąt"
    
    def __str__(self):
        return f"Nowy miot: {self.rasa} - {self.period} {self.year}"
