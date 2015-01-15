describe('the Friday test :)', function(){
  
  it('select_elements_starting_with_a', function(){
    var n = ['bananas', 'apples', 'pears', 'avocados'].select_elements_starting_with_a 
    expect(n).toEqual(['apples', 'avocados'])
  });

  it('select_elements_starting_with_vowel', function(){
    n = ['john', 'david', 'omar', 'fred', 'idris', 'angela'].select_elements_starting_with_vowel
    expect(n).toEqual(['omar', 'idris', 'angela'])
  });

  it('remove_nils_from_array', function(){
    n = ['a', 'b', nil, nil, false, 'c', nil].remove_nils_from_array 
    expect(n).toEqual(['a', 'b', false, 'c'])
  });

  it 'remove_nils_and_false_from_array', function(){
    n = ['a', 'b', nil, nil, false, 'c', nil].remove_nils_and_false_from_array 
    expect(n).toEqual(['a', 'b', 'c'])
  });

  it 'reverse_every_element_in_array', function(){
    n = ['dog', 'monkey', 'elephant'].reverse_every_element_in_array 
    expect(n).toEqual(['god', 'yeknom', 'tnahpele'])
  });

  it 'every_possible_pairing_of_students', function(){
    n = ['Bob', 'Dave', 'Clive'].every_possible_pairing_of_students
    expect(sorted).toEqual([['Bob', 'Clive'], ['Bob', 'Dave'], ['Clive', 'Dave']])
  });

  it 'all_elements_except_first_3', function(){
    n = [1, 2, 3, 4, 5, 6, 7].all_elements_except_first_3 
    expect(n).toEqual([4, 5, 6, 7])
  });

  it 'add_element_to_beginning_of_array', function(){
    n = [2, 3, 4, 5].add_element_to_beginning_of_array(1)
    expect(n).toEqual([1, 2, 3, 4, 5])
  });

  it 'array_sort_by_last_letter_of_word', function(){
    n = ['sky', 'puma', 'maker'].array_sort_by_last_letter_of_word 
    expect(n).toEqual(['puma', 'maker', 'sky'])
  });

  it 'get_first_half_of_string', function(){
    a = 'banana'.get_first_half_of_string 
    b = 'apple'.get_first_half_of_string 

    expect(a).toEqual('ban')
    expect(b).toEqual('app')
  });

  it 'make_numbers_negative', function(){
    a = 5.make_numbers_negative 
    b = -7.make_numbers_negative 

    expect(a).toEqual(-5)
    expect(b).toEqual(-7)
  });

  it 'separate_array_into_even_and_odd_numbers', function(){
    n = [1, 2, 3, 4, 5, 6, 7].separate_array_into_even_and_odd_numbers 
    expect(n).toEqual([[2, 4, 6], [1, 3, 5, 7]])
  });

  it 'number_of_elements_that_are_palindromes', function(){
    n = ['bob', 'radar', 'alex', 'noon', 'banana'].number_of_elements_that_are_palindromes 
    expect(n).toEqual(3)
  });

  it 'shortest_word_in_array', function(){
    n = ["here", "is", "a", "bunch", "of", "words", "of", "different", "lengths"].shortest_word_in_array 
    expect(n).toEqual('a')
  });

  it 'longest_word_in_array', function(){
    n = ["here", "is", "a", "bunch", "of", "words", "of", "different", "lengths"].longest_word_in_array 
    expect(n).toEqual('different')
  });

  it 'total_of_array', function(){
    n = [1, 3, 5, 6, 2, 8].total_of_array 
    expect(n).toEqual(25)
  });

  it 'double_array', function(){
    n = [1, 2, 3].double_array 
    expect(n).toEqual([1, 2, 3, 1, 2, 3])
  });

  it 'turn_symbol_into_string', function(){
    n = :foobar.turn_symbol_into_string 
    expect(n).toEqual('foobar')
  });

  it 'average_of_array', function(){
    n = [10, 15, 25].average_of_array 
    expect(n).toEqual(17)
  });

  it 'get_elements_until_greater_than_five', function(){
    n = [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7].get_elements_until_greater_than_five 
    expect(n).toEqual([1, 3, 5, 4, 1, 2])
  });

  it 'convert_array_to_a_hash', function(){
    n = ['a', 'b', 'c', 'd'].convert_array_to_an_object
    expect(n).toEqual({a:'b', c:'d'})
  });

  it 'remove_capital_letters_from_string', function(){
    n = 'Hello JohnDoe'.remove_capital_letters_from_string 
    expect(n).toEqual('ello ohnoe')
  });

  it 'round_up_number', function(){
    n = 3.142.round_up_number 
    expect(n).toEqual(4)
  });

  it 'round_down_number', function(){
    n = 4.9.round_down_number 
    expect(n).toEqual(4)
  });

  it 'format_date_nicely', function(){
    n = new Date(2013, 10, 31).format_date_nicely 
    expect(n).toEqual('31/10/2013')
  });

  it 'titleize_a_string', function(){
    n = titleize_a_string 'the lion the witch and the wardrobe'
    expect(n).toEqual('The Lion the Witch and the Wardrobe')
  });

  it 'check_a_string_for_special_characters', function(){
    a = 'ABCdef123'.check_a_string_for_special_characters 
    b = 'ABC@def123!'.check_a_string_for_special_characters 
    expect(a).toBe(false)
    expect(b).toBe(true)
  });

  it 'square_root_of', function(){
    a = 9.square_root
    b = 3.square_root
    expect(a).toEqual(3.0)
    expect(b).toEqual(1.7320508075688772)
  });

  it 'is_a_2014_bank_holiday?', function(){
    a = new Date(2014, 8, 25).is_a_2014_bank_holiday
    b = new Date(2014, 8, 26).is_a_2014_bank_holiday
    expect(a).toBe(true)
    expect(b).toBe(false)
  });

  it 'your_birthday_is_on_a_friday_in_the_year', function(){
    n = new Date(2013, 1, 1).your_birthday_is_on_a_friday_in_the_year
    expect(n).toEqual(2016)
  });

});