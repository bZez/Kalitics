<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class TempsTravail extends Constraint
{
    /*
     * Any public properties become valid options for the annotation.
     * Then, use these in your validator class.
     */
    public $message = 'Le temps de travail ne peux excéder {{ value }}h/semaine.';
    public $messageForNull = 'Le temps de travail ne peut être nul.';
}
