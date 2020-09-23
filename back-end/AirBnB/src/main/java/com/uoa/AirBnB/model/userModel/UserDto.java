package com.uoa.AirBnB.model.userModel;

import com.sun.istack.NotNull;
import com.uoa.AirBnB.model.imageModel.ImageDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private long id;
    @NotNull
    @NotEmpty
    private String username;

    private String firstName;
    private String lastName;

    private String email;
    private String number;

    private Boolean approved;

    private ImageDto image;
}
