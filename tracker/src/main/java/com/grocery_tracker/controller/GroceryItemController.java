package com.grocery_tracker.controller;

import com.grocery_tracker.model.GroceryItem;
import com.grocery_tracker.service.GroceryTracker;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "grocery-tracker")
public class GroceryItemController {
    private final GroceryTracker groceryTracker;

    public GroceryItemController(GroceryTracker groceryTracker) {
        this.groceryTracker = groceryTracker;
    }

    @GetMapping(value = "/items")
    public List<GroceryItem> getGroceryList() {
        return groceryTracker.getAllGroceries();
    }

    @PostMapping(value = "/items")
    public ResponseEntity<GroceryItem> postGroceryItem(@Valid @RequestBody GroceryItem addedGroceryItem) {
        GroceryItem savedItem = groceryTracker.addGroceryItem(addedGroceryItem);
        return ResponseEntity.ok(savedItem);
    }
}
