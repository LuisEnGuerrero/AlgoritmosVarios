from Queue import Queue
from Printer import Printer
from Task import Task

import random


def simulation(num_seconds, pages_per_minute):

    lab_printer = Printer(pages_per_minute)  # creamos una instancia de la impresora
    print_queue = Queue()  # creamos una cola
    waiting_times = []  # Creamos una lista para guardar los tiempos de espera

    # esto simulará los 3600 segundps de la hora
    for currentSecond in range(num_seconds):

        # cada segundo ejecutamos la función que nos dice si se creará una nueva tarea
        if new_print_task():
            task = Task(currentSecond)  # creamos la tarea y le pasamos el segundo en el que fue creada
            print_queue.enqueue(task)  # encolamos la tarea

        # si la impresora no está ocupada y tenemos tareas en la cola
        if (not lab_printer.busy()) and (not print_queue.is_empty()):
            next_task = print_queue.dequeue()  # desencolamos la siguiente tarea a imprimir

            # agregamos a los tiempos de espera el tiempo que tuvo que esperar la tarea para mandarse a impresión
            # (esto lo obtenemos con la diferencia entre la hora en que fue creada la tarea y la hora en que se mandó a imprimit)
            waiting_times.append(next_task.wait_time(currentSecond))

            # le pasamos la siguiente tarea a la impresora
            lab_printer.start_next(next_task)

        lab_printer.tick()  # simulamos que pasa un segundo para la impresora

    # obtenemos el promedio de tiempo que tuvo que esperar una tarea para ser impresa
    average_wait = sum(waiting_times)/len(waiting_times)
    # imprimimos el tiempo promedio que tuvo que esperar una tarea para ir a impresión y las tareas que no lograron imprimirse en la hora
    print("Average Wait %6.2f secs %d tasks remaining." % (average_wait, print_queue.size()))


# genera un número random que nos dirá si se generó una tarea para impresión
def new_print_task():
    num = random.randrange(1, 181)
    if num == 180:
        return True
    else:
        return False


# Ejecutamos la simulación 10 veces
for i in range(10):
    simulation(3600, 5)
