# Generated by Django 4.2.11 on 2024-07-26 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_alter_carousel_items_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gellery_Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100)),
                ('image', models.ImageField(blank=True, upload_to='uploads/gallery/')),
                ('add_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Galeria Zdjęć',
                'verbose_name_plural': 'Galeria Zdjęć',
            },
        ),
        migrations.AlterModelOptions(
            name='carousel_items',
            options={'verbose_name': 'Elementy Karuzeli', 'verbose_name_plural': 'Elementy Karuzeli'},
        ),
    ]
