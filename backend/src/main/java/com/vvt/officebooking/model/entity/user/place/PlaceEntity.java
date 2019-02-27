package com.vvt.officebooking.model.entity.user.place;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vvt.officebooking.model.entity.user.room.RoomEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "places")
public class PlaceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;

    @Column
    @NotBlank
    private String name;

    @Column
    private String description;

    @Column
    @NotNull
    private Boolean isUsed = false;

    @Column
    @NotNull
    private Boolean isAvailableForBooking = true;

    @Column
    @NotNull
    private Integer width;

    @Column
    @NotNull
    private Integer height;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "room_id")
    @JsonIgnore
    private RoomEntity room;
}
