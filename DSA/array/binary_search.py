def binary_search(arr, target):
    # input is sorted array and target int/string/char
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]
        if guess == target:
            return guess, mid
        if guess > target:
            high = mid - 1
        else:
            low = mid + 1   
    return None


my_list = [1, 3, 6, 8, 9, 12, 16]

print(binary_search(my_list, 5)) # None
print(binary_search(my_list, 1)) # (1, 0)
print(binary_search(my_list, 12)) # (12, 5)