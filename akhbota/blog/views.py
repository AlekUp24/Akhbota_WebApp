from django.shortcuts import render
from .models import Blog_Post
# Create your views here.

def blog(request):
    blog_posts = Blog_Post.objects.order_by('-post_date')[:5]


    return render(request, 'blog.html', {'blog_posts': blog_posts})
