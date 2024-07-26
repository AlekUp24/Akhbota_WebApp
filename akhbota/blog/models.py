from django.db import models

# Create your models here.

class Blog_Post(models.Model):
    title = models.CharField(max_length=100, blank=True)
    article = models.CharField(max_length=5000, blank=True)
    image = models.ImageField(upload_to='uploads/blog/', blank=True)
    post_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Posty"
        verbose_name_plural = "Posty"
    
    def __str__(self):
        return f"{self.title} - dodano:  {self.post_date}"