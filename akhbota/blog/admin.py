from django import forms
from django.contrib import admin
from .models import Blog_Post

# Create a custom form
class BlogPostForm(forms.ModelForm):
    class Meta:
        model = Blog_Post
        fields = '__all__'
        widgets = {
            'article': forms.Textarea(attrs={'rows': 10, 'cols': 80}),  # Adjust size as needed
        }

# Register the form with the model admin
@admin.register(Blog_Post)
class BlogPostAdmin(admin.ModelAdmin):
    form = BlogPostForm