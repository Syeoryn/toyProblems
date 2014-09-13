#  Write a function that takes two sets, and determines whether one is a subset of the other

def isSubsetOf( contextArray, subsetArray ):
    """isSubsetOf takes in a context array and subset array, and determines if the subset array is a subset of the context array."""

    superset = {}
    for value in contextArray:
        superset[value] = value

    for value in subsetArray:
        if not value in contextArray:
            return False

    return True
