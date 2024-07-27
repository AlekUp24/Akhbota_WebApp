# Generated by Django 4.2.11 on 2024-07-27 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kennel', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='dog',
            options={'verbose_name': 'Psy', 'verbose_name_plural': 'Psy'},
        ),
        migrations.AlterModelOptions(
            name='dog_breed',
            options={'verbose_name': 'Rasy', 'verbose_name_plural': 'Rasy'},
        ),
        migrations.AddField(
            model_name='dog',
            name='description',
            field=models.CharField(blank=True, max_length=10000),
        ),
        migrations.AlterField(
            model_name='dog',
            name='awards',
            field=models.CharField(blank=True, max_length=10000),
        ),
        migrations.AlterField(
            model_name='dog',
            name='birth_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='dog',
            name='medical',
            field=models.CharField(blank=True, max_length=10000),
        ),
    ]
