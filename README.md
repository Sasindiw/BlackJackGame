# Blackjack Game

## Introduction
Blackjack is a popular card game played in casinos. The objective of the game is to beat the dealer by having a hand value as close to 21 as possible without exceeding it. The game is also known as "21" because the goal is to get a hand with a total value of 21 or less while still being higher than the dealer's hand.

## How Blackjack is Played
- The game is typically played with one or more decks of standard playing cards.
- Each card has a value:
  - Cards 2 through 10 are worth their face value.
  - Face cards (Jack, Queen, King) are worth 10.
  - Aces can be worth either 1 or 11, depending on what benefits the hand.
- The game begins with each player and the dealer receiving two cards.
  - Players' cards are usually dealt face up.
  - The dealer has one card face up and one card face down.
  
### Gameplay Flow
1. **Initial Deal**:
   - Each player and the dealer receive two cards. Players can see both their cards, while only one of the dealer’s cards is revealed.
   
2. **Player's Turn**:
   - The player has several options:
     - **Hit**: Request another card to try to get closer to 21.
     - **Stand**: Keep the current hand without drawing any more cards.
     - **Double Down**: Double the initial bet and receive exactly one more card.
     - **Split**: If the player has two cards of the same value, they can split them into two separate hands.
     - **Surrender**: Forfeit half the bet and end the hand immediately.

3. **Dealer's Turn**:
   - The dealer reveals their hidden card.
   - If the dealer has a hand of less than 17, they must continue to draw cards until their hand is 17 or higher.
   - If the dealer goes over 21, they "bust," and the player wins.
   
4. **Winning**:
   - The player's hand wins if:
     - The player's hand is higher than the dealer's without exceeding 21.
     - The dealer busts.
   - If the player exceeds 21, they bust and lose automatically.

## Functions in Blackjack

### 1. Card Dealing
   - **deal_card()**: Deals a random card from the deck.
   - **initial_deal()**: Deals two cards to each player and the dealer.

### 2. Player Actions
   - **hit()**: Adds another card to the player’s hand.
   - **stand()**: Ends the player's turn without drawing more cards.
   - **double_down()**: Doubles the player's bet and gives one final card.
   - **split()**: Splits a pair into two separate hands.
   - **surrender()**: Allows the player to forfeit the game and lose half the bet.

### 3. Hand Calculation
   - **calculate_hand_value()**: Calculates the total value of a player's or dealer's hand, accounting for Aces being either 1 or 11.

### 4. Game Logic
   - **check_bust()**: Checks if a hand's value exceeds 21.
   - **check_blackjack()**: Determines if a hand totals exactly 21 with the first two cards.
   - **dealer_turn()**: Controls the dealer's actions after the player finishes their turn.
   - **determine_winner()**: Compares the player's hand with the dealer's to determine the outcome of the game.

### 5. Betting
   - **place_bet()**: Allows the player to place a wager before the hand is dealt.
   - **payout()**: Calculates and distributes winnings based on the game result.

## Contact

For any inquiries or feedback, please contact:

- **Your Name**: [sasindiw@gmail.com](mailto:sasindiw@gmail.com)
- **GitHub**: [Sasindiw](https://github.com/Sasindiw)
