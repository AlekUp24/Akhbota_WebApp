# Generated by Django 4.2.11 on 2024-10-10 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0006_sections'),
    ]

    operations = [
        migrations.CreateModel(
            name='Curr_Lang',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('EN', models.BooleanField()),
            ],
            options={
                'verbose_name': 'Język',
                'verbose_name_plural': 'Język',
            },
        ),
    ]
