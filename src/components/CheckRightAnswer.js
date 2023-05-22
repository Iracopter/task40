var counter=0;

export function CheckRightAnswer(checkedID, answer){
    if(checkedID === answer){
        counter++;
    }

    return (
        counter
    );
}