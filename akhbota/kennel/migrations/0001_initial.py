# Generated by Django 4.2.11 on 2024-07-27 13:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dog_Breed',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Dog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('birth_date', models.DateField(auto_now=True)),
                ('awards', models.CharField(max_length=10000)),
                ('medical', models.CharField(max_length=10000)),
                ('image1', models.ImageField(blank=True, upload_to='uploads/dogs/')),
                ('image2', models.ImageField(blank=True, upload_to='uploads/dogs/')),
                ('breed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kennel.dog_breed')),
            ],
        ),
    ]
