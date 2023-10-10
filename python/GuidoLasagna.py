'''
Guido's Gorgeous Lasagna
You're going to write some code to help you cook a gorgeous lasagna from your favorite cookbook.
You have five tasks, all related to cooking your recipe.

Task 1
Define an EXPECTED_BAKE_TIME constant that returns how many minutes the lasagna should bake in the oven.
According to your cookbook, the Lasagna should be in the oven for 40 minutes.
Task 2
Implement the bake_time_remaining() function that takes the actual minutes the lasagna has been in the oven
as an argument and returns how many minutes the lasagna still needs to bake based on the EXPECTED_BAKE_TIME.
Task 3
Implement the preparation_time_in_minutes() function that takes the number of layers you want to add to the lasagna
as an argument and returns how many minutes you would spend making them. Assume each layer takes 2 minutes to prepare.
Task 4
Implement the elapsed_time_in_minutes() function that has two parameters: number_of_layers (the number of layers added
to the lasagna) and elapsed_bake_time (the number of minutes the lasagna has been baking in the oven). This function
should return the total number of minutes you've been cooking, or the sum of your preparation time and the time
the lasagna has already spent baking in the oven.
'''

# define the 'EXPECTED_BAKE_TIME' constant
EXPECTED_BAKE_TIME = 40
# define the 'PREPARATION_TIME' constant
# equal to the time it takes to prepare a single layer
PREPARATION_TIME = 2

# define the 'bake_time_remaining()' function
def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int baking time already elapsed.
    :return: int remaining bake time derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time

# define the 'preparation_time_in_minutes()' function
#       and consider using 'PREPARATION_TIME' here
def preparation_time_in_minutes(number_of_layers):
    """Calculate total time needed to prepare.
    :param number_of_layers: int number of lasagna layers
    :return: int total time derived from 'PREPARATION_TIME'

    Function that takes the expected time needed to prepare a single layer of
    lasagna as an argument and returns how many minutes in total is needed to prepare
    a particular lasagna based on the 'PREPARATION_TIME'.
    """
    return PREPARATION_TIME*number_of_layers

# TODO: define the 'elapsed_time_in_minutes()' function
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """
    Return elapsed cooking time.

    This function takes two numbers representing the number of layers & the time already spent
    baking and calculates the total elapsed minutes spent cooking the lasagna.
    """
    elapsed_time = preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
    return elapsed_time
