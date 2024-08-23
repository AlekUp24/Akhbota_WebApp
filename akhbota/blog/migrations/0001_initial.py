# Generated by Django 4.2.11 on 2024-07-26 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog_Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('artice', models.CharField(blank=True, max_length=5000)),
                ('image', models.ImageField(blank=True, upload_to='uploads/blog/')),
                ('post_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Posty',
                'verbose_name_plural': 'Posty',
            },
        ),
    ]