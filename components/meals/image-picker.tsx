'use client';

import classes from './image-picker.module.css';
import React, {useRef, useState} from "react";
import Image from "next/image";
export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);

    const imageInputRef = useRef<HTMLInputElement | null>(null);

    function handleImageChange(e) {

        const file = e.target.files[0];

        if (!file) {
            // 이미지가 선택되지 않은 경우 미리보기된 이미지를 재설정
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
        if ("click" in imageInputRef.current) {
            imageInputRef.current.click();
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