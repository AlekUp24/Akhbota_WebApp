from django.shortcuts import render
from .models import Blog_Post
from kennel.models import Dog_Breed
# Create your views here.


def blog(request):
    breeds = Dog_Breed.objects.all()
    blog_posts = Blog_Post.objects.order_by('-post_date')[:5]

    return render(request, 'blog.html', {'blog_posts': blog_posts ,'breeds':breeds})
