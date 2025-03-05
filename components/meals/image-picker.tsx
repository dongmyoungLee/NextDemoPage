'use client';

import classes from './image-picker.module.css';
import React, {ChangeEvent, useRef, useState} from "react";
import Image from "next/image";
import {ImagePickerProps} from "@/interfaces/interfaces";

export default function ImagePicker({label, name} : ImagePickerProps) {
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);

    const imageInputRef = useRef<HTMLInputElement | null>(null);

    function handleImageChange(e : ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        let file;

        if (files && files.length > 0) { // files가 null이 아니고 길이가 0보다 큰지 확인
            file = files[0];

            const fileReader = new FileReader();

            fileReader.onload = () => {
                setPickedImage(fileReader.result);
            };

            fileReader.readAsDataURL(file);
        } else {
            // 파일이 선택되지 않았을 경우 미리보기된 이미지를 재설정
            setPickedImage(null);
            return ;
        }


        const fileReader = new FileReader();

        // 파일 읽기가 완료되었을 때
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        // Data URL은 파일의 내용을 Base64 인코딩된 문자열로 표현
        fileReader.readAsDataURL(file);
    }


    function handlePicker() {
        if (imageInputRef.current) { // Check if imageInputRef.current is not null
            if ("click" in imageInputRef.current) {
                imageInputRef.current.click();
            }
        }
    }

    return (
      <div className={classes.picker}>
          <label htmlFor="image">{label}</label>
          <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image picked yet.</p>}
                {pickedImage && typeof pickedImage === "string" && (
                    <Image fill src={pickedImage} alt="The Image" />
                )}

            </div>
            <input required onChange={handleImageChange} ref={imageInputRef as React.MutableRefObject<HTMLInputElement>} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} />
              {/* onClick 은 클라이언트 에서 일어나는 이벤트..*/}
              <button onClick={handlePicker} className={classes.button} type="button">
                  Pick an Image
              </button>
          </div>
      </div>
    );
}