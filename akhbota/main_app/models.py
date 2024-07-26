from django.db import models

# Create your models here.

class Carousel_Items(models.Model):
    title = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=255, blank=True)
    image = models.ImageField(upload_to='uploads/carousel/', blank=True)

    def __str__(self):
        return f"{self.title}"
    

