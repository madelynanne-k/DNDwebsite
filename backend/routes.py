from flask import Blueprint, request, jsonify
from db import get_db_connection

routes = Blueprint('routes', __name__)

#route for loading character names on homepage
@routes.route('/characters', methods=['GET'])
def get_characters():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM characters")
    characters = cursor.fetchall()
    conn.close()
    return jsonify(characters)

#route for getting character info by id
@routes.route('/characters/<int:char_id>', methods=['GET'])
def get_character_by_id(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM characters WHERE id =%s", (char_id,))
    character = cursor.fetchone()
    cursor.close()
    conn.close()

    if character:
        return jsonify(character)
    else:
        return jsonify({'error': 'Character not found'}), 404

#route for getting ability scores by character id
@routes.route('/characters/<int:char_id>/ability-scores', methods=['GET'])
def get_ability_scores(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM ability_scores WHERE character_id =%s", (char_id,))
    abilityScore = cursor.fetchone()
    cursor.close()
    conn.close()

    if abilityScore:
        return jsonify(abilityScore)
    else:
        return jsonify({'error': 'scores not found'}), 404
    
#route for getting ability mods based off of character id
@routes.route('/characters/<int:char_id>/ability-modifiers', methods=['GET'])
def get_ability_modifiers(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM ability_modifiers WHERE character_id =%s", (char_id,))
    abilityModifiers = cursor.fetchone()
    cursor.close()
    conn.close()

    if abilityModifiers:
        return jsonify(abilityModifiers)
    else:
        return jsonify({'error': 'modifiers not found'}), 404
    
#route to get saving throws from character id
@routes.route('/characters/<int:char_id>/saving-throws', methods=['GET'])
def get_saving_throws(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM saving_throws WHERE character_id =%s", (char_id,))
    savingThrows = cursor.fetchone()
    cursor.close()
    conn.close()

    if savingThrows:
        return jsonify(savingThrows)
    else:
        return jsonify({'error': 'saving throws not found'}), 404
    
#route to get senses from character id
@routes.route('/characters/<int:char_id>/senses', methods=['GET'])
def get_senses(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM senses WHERE character_id =%s", (char_id,))
    senses = cursor.fetchone()
    cursor.close()
    conn.close()

    if senses:
        return jsonify(senses)
    else:
        return jsonify({'error': 'senses not found'}), 404
    
#route to get skills from character id
@routes.route('/characters/<int:char_id>/skills', methods=['GET'])
def get_skills(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM skills WHERE character_id =%s", (char_id,))
    skills = cursor.fetchone()
    cursor.close()
    conn.close()

    if skills:
        return jsonify(skills)
    else:
        return jsonify({'error': 'skills not found'}), 404
    
#route to get badges from character id
@routes.route('/characters/<int:char_id>/badges', methods=['GET'])
def get_badges(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM badges WHERE character_id =%s", (char_id,))
    badges = cursor.fetchone()
    cursor.close()
    conn.close()

    if badges:
        return jsonify(badges)
    else:
        return jsonify({'error': 'badges not found'}), 404
    
#route to get badges from character id
@routes.route('/characters/<int:char_id>/proficiencies-and-training', methods=['GET'])
def get_proficiencies_and_training(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM proficiencies_and_training WHERE character_id =%s", (char_id,))
    training = cursor.fetchone()
    cursor.close()
    conn.close()

    if training:
        return jsonify(training)
    else:
        return jsonify({'error': 'proficiencies and training not found'}), 404
    
#route to get spells from character id and spell level
@routes.route('/characters/<int:char_id>/spells/<int:spell_level>', methods=['GET'])
def get_spells(char_id, spell_level):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM spells WHERE character_id =%s AND spell_level =%s", (char_id, spell_level))
    spells = cursor.fetchall()
    cursor.close()
    conn.close()

    if spells:
        return jsonify(spells)
    else:
        return jsonify({'error': 'spells not found'}), 404
    
    
#route to get spells from character id 
@routes.route('/characters/<int:char_id>/spells', methods=['GET'])
def get_all_spells(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM spells WHERE character_id =%s", (char_id,))
    spells = cursor.fetchall()
    cursor.close()
    conn.close()

    if spells:
        return jsonify(spells)
    else:
        return jsonify({'error': 'spells not found'}), 404
    

#route to get weapons from character id 
@routes.route('/characters/<int:char_id>/weapons', methods=['GET'])
def get_weapons(char_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary = True)

    cursor.execute("SELECT * FROM weapons WHERE character_id =%s", (char_id,))
    weapons = cursor.fetchall()
    cursor.close()
    conn.close()

    if weapons:
        return jsonify(weapons)
    else:
        return jsonify({'error': 'weapons not found'}), 404