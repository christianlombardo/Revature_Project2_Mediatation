package com.revature.springrestapi.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@AttributeOverrides({
        @AttributeOverride(
                name = "name",
                column = @Column(name = "meditation_name")
        )
})
public class Meditation {

    // cannot be an @Embeddable and an @Entity.
    private String name;
    private boolean favorite;
    private int meditationTime;
    @ElementCollection
    private List<String> diaryNotes;
}
