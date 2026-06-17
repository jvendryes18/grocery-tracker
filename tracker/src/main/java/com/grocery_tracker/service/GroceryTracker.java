package com.grocery_tracker.service;

import com.grocery_tracker.model.GroceryItem;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryTracker {
    private Integer currentId = 1;
    private List<GroceryItem> sampleListGroceryItems = new ArrayList<>();

    public List<GroceryItem> getAllGroceries() {
        return sampleListGroceryItems;
    }

    public GroceryItem addGroceryItem(GroceryItem addedGroceryItem) {
        addedGroceryItem.setId(currentId++);
        sampleListGroceryItems.add(addedGroceryItem);
        return addedGroceryItem;
    }
}
